export interface IUser {
	fullName: string
	avatar: string
	skills: ISkill[]
	projects: IProject[]
	experience: IExperienceItem[]
}

export interface ISkill {
	id: number
	iconTagName: string
	title: string
	description: string
	technology: string[]
}

export interface IProject {
	id: number
	title: string
	description: string
	imgTagName: 'todoList' | 'socialNetwork'
	link: string
	sourceCodeLink: string
}

export interface IExperienceItem {
	id: number
	logo: string
	title: string
	period: string[]
	description: string
}