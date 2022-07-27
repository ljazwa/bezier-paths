export const animatePath = (parent: HTMLDivElement) => {
    const children = Array.from(parent.childNodes) as HTMLElement[];
    let i = 0;
    const id = window.setInterval(() => {
        (children[i++] as HTMLImageElement).style.display = 'block';
        if (i === children.length) {
            window.clearInterval(id);
        }
    }, 100);
};
