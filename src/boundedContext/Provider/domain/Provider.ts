import ProviderId from "./ProviderId";
import ProviderName from "./ProviderName";

export default class Provider {

	constructor(
		public readonly id: ProviderId,
		public readonly name: ProviderName,
	){}

}