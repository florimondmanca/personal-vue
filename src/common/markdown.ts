import marked from 'marked';
import hljs from 'highlightjs';

const renderer = new marked.Renderer();

renderer.image = (href: string, title: string, text: string) => {
    const caption = text ? `<figcaption>${text}</figcaption>` : '';
    return `
      <div class="markdown-image">
        <img src="${href}" title="${title || text || ''}">
        ${caption}
      </div>
    `;
};

marked.setOptions({
    sanitize: true,
    renderer,
    highlight: (code: string) => {
        return hljs.highlightAuto(code).value;
    },
});

export default {
    render: (text: string) => marked(text),
};
