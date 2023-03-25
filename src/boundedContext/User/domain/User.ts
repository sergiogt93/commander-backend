export default class User {

	constructor(
		public readonly id: string,
		public readonly username: string,
		public readonly password: string,
		public readonly active: boolean,
    //public readonly avatar: string,
	){}

}