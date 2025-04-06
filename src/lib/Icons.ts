type Type = {
    [key: string]: {
        viewBox: string,
        svg: string
    }
}

export let icons: Type = {
    LeftButton: {
        viewBox: '0 0 24 24',
        svg: `<g fill="none"><path fill="#fff" d="M20 12.75a.75.75 0 0 0 0-1.5zm0-1.5H4v1.5h16z" opacity="0.5"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 6l-6 6l6 6"/></g>`
    },

    RightButton: {
        viewBox: '0 0 24 24',
        svg: `<g fill="none"><path fill="#fff" d="M4 11.25a.75.75 0 0 0 0 1.5zm0 1.5h16v-1.5H4z" opacity="0.5"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 6l6 6l-6 6"/></g>`
    }

} as const;