export default {
	name: 'newsletter',
	title: 'Newsletter',
	type: 'document',
	fields: [
		{
			name: 'email',
			title: 'Email',
			type: 'string',
			validation: (Rule) =>
				Rule.regex(
					/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
				).error('Enter a valid email!'),
		},
	],
};
