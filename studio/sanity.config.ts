import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './schemas'

export default defineConfig({
  name: 'drivetwo',
  title: 'DriveTwo Studio',
  projectId: 'YOUR_PROJECT_ID', // <-- replace with your real Project ID
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas }
})
