import * as keystone from 'keystone';
const Types = keystone.Field.Types;


export const Beer = new keystone.List('Beer', {
  autokey: { path: 'slug', from: 'name', unique: true },
  map: { name: 'name' },
  defaultSort: '-name'
});

Beer.add({
  name: { type: String, required: true, index: true },
  type: { type: String, required: true, initial: true },
  image: { type: Types.CloudinaryImage },
  description: { type: Types.Html, wysiwyg: true },
  abv: { type: Number },
  systembolagetId: { type: String }
});

Beer.defaultColumns = 'name, type, image';
Beer.register();
