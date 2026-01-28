import 'reflect-metadata'
import { DataSource } from 'typeorm'

const ds = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_delivery',
})

async function main() {
  await ds.initialize()
  const tables = await ds.query(
    `SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_NAME IN ('tb_categoria','tb_produtos')`,
    [ds.options.database as string],
  )
  const names = new Set(tables.map((t: any) => t.TABLE_NAME))
  await ds.query(`SET FOREIGN_KEY_CHECKS=0`)
  if (names.has('tb_produtos')) {
    await ds.query(`TRUNCATE TABLE tb_produtos`)
  }
  if (names.has('tb_categoria')) {
    await ds.query(`TRUNCATE TABLE tb_categoria`)
  }
  await ds.query(`SET FOREIGN_KEY_CHECKS=1`)
  console.log('Banco limpo com sucesso')
  await ds.destroy()
}

main().catch(async (e) => {
  console.error(e)
  try {
    if (ds.isInitialized) await ds.destroy()
  } catch {}
  process.exit(1)
})
