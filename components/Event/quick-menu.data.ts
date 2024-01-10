export interface IQuickMenu {
	title: string
	link: string
}

export interface IQuickMenusObject {
	name: string
	value: IQuickMenu[]
}

export const quickMenus: IQuickMenusObject[] = [
	{
		name: "topic",
		value: [
			{ title: "Kurslar", link: "" },
			{ title: "Konferensiyalar", link: "" },
			{ title: "Mitaplar", link: "" },
		],
	},
	{
		name: "location",
		value: [
			{ title: "Baki", link: "" },
			{ title: "Online", link: "" },
		],
	},
	{
		name: "tags",
		value: [
			{ title: "Frontend", link: "" },
			{ title: "Web design", link: "" },
			{ title: "Java", link: "" },
			{ title: "QA", link: "" },
			{ title: "DevOps", link: "" },
			{ title: "Backend", link: "" },
		],
	},
]
