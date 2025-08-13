import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './schemas'

export default defineConfig({
  name: 'drivetwo',
  title: 'DriveTwo Studio',
  projectId: 'PROJECT_ID', // ➜ หลังรัน `sanity init` ระบบจะกรอกให้ หรือแก้เองเป็นค่า projectId ของคุณ
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas }
})
