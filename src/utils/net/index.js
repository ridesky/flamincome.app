import mainNet from "./mainNet"
import rinkebyNet from "./rinkebyNet"

const NET_CONFIG = {
	1: mainNet,
	4: rinkebyNet,
}

export function getNetConfig(netId) {
	if (!NET_CONFIG[netId]) {
		throw new Error("NetWork Error!")
	}
	return NET_CONFIG[netId]
}
