export default {
	name: 'users',
	title: 'Users',
	type: 'document',
	fields: [
		{
			name: 'fullName',
			title: 'Full Name',
			type: 'string',
		},
		{
			name: 'address',
			title: 'Mailing Address',
			type: 'string',
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string',
		},
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
