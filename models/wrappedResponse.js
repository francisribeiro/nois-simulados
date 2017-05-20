module.exports.generateResponse = generateResponse;

function generateResponse(code, status, message, data) {
	let response = {
		code: code,
		status: status,
		message: message,
		data: data
	}

	return response;
}