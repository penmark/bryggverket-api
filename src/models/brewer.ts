import * as keystone from 'keystone';
const Types = keystone.Field.Types;

export const Brewer = new keystone.List('Brewer');

Brewer.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true, unique: true },
  image: { type: Types.CloudinaryImage },
  password: { type: Types.Password, initial: true, required: false },
});
Brewer.schema.virtual('canAccessKeystone').get(() => true);
Brewer.defaultColumns = 'name, email, image';
Brewer.register();
