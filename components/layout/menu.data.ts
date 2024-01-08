interface IMenuItem {
	title: string
	link: string
}

export const MENU_DATA: IMenuItem[] = [
	{ title: "Əsas səhifə", link: "/" },
	{ title: "Bloq", link: "/blog" },
	{ title: "Təqvim", link: "/events" },
	{ title: "Reytinqlər", link: "/ratings" },
]
