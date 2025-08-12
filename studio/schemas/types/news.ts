export default {
  name: 'news',
  title: 'News (ข่าว)',
  type: 'document',
  fields: [
    {name:'title', title:'หัวข้อข่าว', type:'string', validation:(Rule:any)=>Rule.required()},
    {name:'slug', title:'Slug', type:'slug', options:{source:'title'}},
    {name:'heroImage', title:'รูปปก', type:'image'},
    {name:'excerpt', title:'คำเกริ่น', type:'text'},
    {name:'content', title:'เนื้อหา', type:'array', of:[{type:'block'}]},
    {name:'publishDate', title:'วันที่เผยแพร่', type:'date'}
  ]
}
