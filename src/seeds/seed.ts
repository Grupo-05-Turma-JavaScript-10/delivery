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

const categoriasSeed = [
  'Saladas e Bowls',
  'Grãos Integrais',
  'Proteínas Magras',
  'Snacks Saudáveis',
  'Smoothies e Bebidas',
  'Sopas e Caldos',
  'Vegetariano/Vegano',
]

type ProdutoSeed = {
  nome: string
  descricao: string
  preco: number
  foto: string
  saudavel: boolean
  categoriaDescricao: string
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function makeFoto(nome: string) {
  return `https://cdn.exemplo.com/produtos/${slugify(nome)}.jpg`
}

function p(n: number) {
  return Math.round(n * 100) / 100
}

const produtosSeed: ProdutoSeed[] = [
  { nome: 'Salada Caesar Light', descricao: 'Alface romana, frango grelhado, croutons integrais, molho leve', preco: p(24.9), foto: makeFoto('Salada Caesar Light'), saudavel: true, categoriaDescricao: 'Saladas e Bowls' },
  { nome: 'Bowls de Quinoa Mediterrânea', descricao: 'Quinoa, grão-de-bico, pepino, tomate, azeite', preco: p(29.9), foto: makeFoto('Bowls de Quinoa Mediterrânea'), saudavel: true, categoriaDescricao: 'Saladas e Bowls' },
  { nome: 'Salada de Kale com Abacate', descricao: 'Kale, abacate, sementes, limão', preco: p(27.5), foto: makeFoto('Salada de Kale com Abacate'), saudavel: true, categoriaDescricao: 'Saladas e Bowls' },
  { nome: 'Poke Bowl Integral', descricao: 'Arroz integral, salmão, edamame, algas, gergelim', preco: p(34.9), foto: makeFoto('Poke Bowl Integral'), saudavel: true, categoriaDescricao: 'Saladas e Bowls' },
  { nome: 'Salada Caprese com Rúcula', descricao: 'Tomate, muçarela de búfala, rúcula, manjericão', preco: p(22.9), foto: makeFoto('Salada Caprese com Rúcula'), saudavel: true, categoriaDescricao: 'Saladas e Bowls' },
  { nome: 'Tabule de Quinoa', descricao: 'Quinoa, salsinha, hortelã, tomate, limão', preco: p(19.9), foto: makeFoto('Tabule de Quinoa'), saudavel: true, categoriaDescricao: 'Saladas e Bowls' },
  { nome: 'Bowl de Açaí sem Açúcar', descricao: 'Açaí puro, frutas frescas, granola integral', preco: p(21.9), foto: makeFoto('Bowl de Açaí sem Açúcar'), saudavel: true, categoriaDescricao: 'Saladas e Bowls' },

  { nome: 'Arroz Integral com Amêndoas', descricao: 'Arroz integral, amêndoas laminadas, ervas', preco: p(14.9), foto: makeFoto('Arroz Integral com Amêndoas'), saudavel: true, categoriaDescricao: 'Grãos Integrais' },
  { nome: 'Risoto de Cevada com Cogumelos', descricao: 'Cevada, cogumelos, caldo de legumes', preco: p(26.9), foto: makeFoto('Risoto de Cevada com Cogumelos'), saudavel: true, categoriaDescricao: 'Grãos Integrais' },
  { nome: 'Quinoa com Legumes Assados', descricao: 'Quinoa, abobrinha, pimentão, cebola roxa', preco: p(23.9), foto: makeFoto('Quinoa com Legumes Assados'), saudavel: true, categoriaDescricao: 'Grãos Integrais' },
  { nome: 'Bulgur com Ervas', descricao: 'Trigo para quibe integral, ervas frescas', preco: p(18.9), foto: makeFoto('Bulgur com Ervas'), saudavel: true, categoriaDescricao: 'Grãos Integrais' },
  { nome: 'Macarrão Integral ao Pesto', descricao: 'Pasta integral, pesto de manjericão, nozes', preco: p(24.5), foto: makeFoto('Macarrão Integral ao Pesto'), saudavel: true, categoriaDescricao: 'Grãos Integrais' },
  { nome: 'Farro com Tomate e Azeitonas', descricao: 'Farro, tomate, azeitona, azeite', preco: p(25.9), foto: makeFoto('Farro com Tomate e Azeitonas'), saudavel: true, categoriaDescricao: 'Grãos Integrais' },
  { nome: 'Arroz Negro com Rúcula', descricao: 'Arroz negro, rúcula, limão, azeite', preco: p(27.9), foto: makeFoto('Arroz Negro com Rúcula'), saudavel: true, categoriaDescricao: 'Grãos Integrais' },

  { nome: 'Peito de Frango Grelhado', descricao: 'Frango marinado e grelhado, ervas', preco: p(28.9), foto: makeFoto('Peito de Frango Grelhado'), saudavel: true, categoriaDescricao: 'Proteínas Magras' },
  { nome: 'Salmão ao Forno com Limão', descricao: 'Salmão, limão, dill', preco: p(39.9), foto: makeFoto('Salmão ao Forno com Limão'), saudavel: true, categoriaDescricao: 'Proteínas Magras' },
  { nome: 'Carne Magra ao Chimichurri', descricao: 'Alcatra magra, chimichurri caseiro', preco: p(32.9), foto: makeFoto('Carne Magra ao Chimichurri'), saudavel: true, categoriaDescricao: 'Proteínas Magras' },
  { nome: 'Tofu Grelhado com Gergelim', descricao: 'Tofu firme, gergelim, molho leve', preco: p(24.9), foto: makeFoto('Tofu Grelhado com Gergelim'), saudavel: true, categoriaDescricao: 'Proteínas Magras' },
  { nome: 'Omelete de Claras com Espinafre', descricao: 'Claras, espinafre, ervas', preco: p(17.9), foto: makeFoto('Omelete de Claras com Espinafre'), saudavel: true, categoriaDescricao: 'Proteínas Magras' },
  { nome: 'Tilápia na Crosta de Amêndoas', descricao: 'Tilápia, amêndoas, limão', preco: p(29.9), foto: makeFoto('Tilápia na Crosta de Amêndoas'), saudavel: true, categoriaDescricao: 'Proteínas Magras' },
  { nome: 'Peru Assado com Ervas', descricao: 'Peito de peru, ervas aromáticas', preco: p(33.9), foto: makeFoto('Peru Assado com Ervas'), saudavel: true, categoriaDescricao: 'Proteínas Magras' },

  { nome: 'Mix de Nuts e Sementes', descricao: 'Amêndoas, castanhas, sementes de abóbora', preco: p(12.9), foto: makeFoto('Mix de Nuts e Sementes'), saudavel: true, categoriaDescricao: 'Snacks Saudáveis' },
  { nome: 'Hummus com Palitos de Cenoura', descricao: 'Grão-de-bico, tahine, limão', preco: p(16.9), foto: makeFoto('Hummus com Palitos de Cenoura'), saudavel: true, categoriaDescricao: 'Snacks Saudáveis' },
  { nome: 'Iogurte Grego com Mel e Nozes', descricao: 'Iogurte natural, mel, nozes', preco: p(14.9), foto: makeFoto('Iogurte Grego com Mel e Nozes'), saudavel: true, categoriaDescricao: 'Snacks Saudáveis' },
  { nome: 'Barrinha Integral de Cacau', descricao: 'Aveia integral, cacau, tâmaras', preco: p(9.9), foto: makeFoto('Barrinha Integral de Cacau'), saudavel: true, categoriaDescricao: 'Snacks Saudáveis' },
  { nome: 'Chips de Batata Doce', descricao: 'Batata doce assada, páprica', preco: p(11.9), foto: makeFoto('Chips de Batata Doce'), saudavel: true, categoriaDescricao: 'Snacks Saudáveis' },
  { nome: 'Maçã com Pasta de Amendoim', descricao: 'Maçã fresca, pasta de amendoim natural', preco: p(10.9), foto: makeFoto('Maçã com Pasta de Amendoim'), saudavel: true, categoriaDescricao: 'Snacks Saudáveis' },
  { nome: 'Edamame com Flor de Sal', descricao: 'Soja verde cozida, sal marinho', preco: p(13.9), foto: makeFoto('Edamame com Flor de Sal'), saudavel: true, categoriaDescricao: 'Snacks Saudáveis' },

  { nome: 'Smoothie Verde Detox', descricao: 'Espinafre, maçã, pepino, gengibre', preco: p(18.9), foto: makeFoto('Smoothie Verde Detox'), saudavel: true, categoriaDescricao: 'Smoothies e Bebidas' },
  { nome: 'Smoothie de Frutas Vermelhas', descricao: 'Morango, framboesa, mirtilo, iogurte', preco: p(19.9), foto: makeFoto('Smoothie de Frutas Vermelhas'), saudavel: true, categoriaDescricao: 'Smoothies e Bebidas' },
  { nome: 'Kombucha Artesanal', descricao: 'Chá fermentado, baixo açúcar', preco: p(15.9), foto: makeFoto('Kombucha Artesanal'), saudavel: true, categoriaDescricao: 'Smoothies e Bebidas' },
  { nome: 'Suco de Laranja Natural', descricao: 'Laranja espremida na hora', preco: p(12.9), foto: makeFoto('Suco de Laranja Natural'), saudavel: true, categoriaDescricao: 'Smoothies e Bebidas' },
  { nome: 'Leite de Amêndoas Caseiro', descricao: 'Amêndoas, água filtrada', preco: p(16.9), foto: makeFoto('Leite de Amêndoas Caseiro'), saudavel: true, categoriaDescricao: 'Smoothies e Bebidas' },
  { nome: 'Matcha Latte', descricao: 'Chá verde em pó, leite vegetal', preco: p(21.9), foto: makeFoto('Matcha Latte'), saudavel: true, categoriaDescricao: 'Smoothies e Bebidas' },
  { nome: 'Água Saborizada com Hortelã', descricao: 'Água, hortelã, limão', preco: p(8.9), foto: makeFoto('Água Saborizada com Hortelã'), saudavel: true, categoriaDescricao: 'Smoothies e Bebidas' },

  { nome: 'Sopa de Abóbora com Gengibre', descricao: 'Abóbora, gengibre, caldo leve', preco: p(23.9), foto: makeFoto('Sopa de Abóbora com Gengibre'), saudavel: true, categoriaDescricao: 'Sopas e Caldos' },
  { nome: 'Caldo Verde Integral', descricao: 'Couve, batata doce, azeite', preco: p(22.9), foto: makeFoto('Caldo Verde Integral'), saudavel: true, categoriaDescricao: 'Sopas e Caldos' },
  { nome: 'Sopa de Lentilha com Cenoura', descricao: 'Lentilha, cenoura, especiarias', preco: p(19.9), foto: makeFoto('Sopa de Lentilha com Cenoura'), saudavel: true, categoriaDescricao: 'Sopas e Caldos' },
  { nome: 'Minestrone Integral', descricao: 'Legumes variados, feijão, pasta integral', preco: p(24.9), foto: makeFoto('Minestrone Integral'), saudavel: true, categoriaDescricao: 'Sopas e Caldos' },
  { nome: 'Consomê de Frango', descricao: 'Caldo claro de frango com ervas', preco: p(18.9), foto: makeFoto('Consomê de Frango'), saudavel: true, categoriaDescricao: 'Sopas e Caldos' },
  { nome: 'Sopa de Tomate Assado', descricao: 'Tomate assado, manjericão', preco: p(21.9), foto: makeFoto('Sopa de Tomate Assado'), saudavel: true, categoriaDescricao: 'Sopas e Caldos' },
  { nome: 'Caldo de Legumes Caseiro', descricao: 'Legumes frescos, baixo sódio', preco: p(17.9), foto: makeFoto('Caldo de Legumes Caseiro'), saudavel: true, categoriaDescricao: 'Sopas e Caldos' },

  { nome: 'Bowl Vegano de Grão-de-bico', descricao: 'Grão-de-bico, abacate, legumes', preco: p(26.9), foto: makeFoto('Bowl Vegano de Grão-de-bico'), saudavel: true, categoriaDescricao: 'Vegetariano/Vegano' },
  { nome: 'Lasanha de Berinjela', descricao: 'Berinjela, molho de tomate, queijo vegetal', preco: p(28.9), foto: makeFoto('Lasanha de Berinjela'), saudavel: true, categoriaDescricao: 'Vegetariano/Vegano' },
  { nome: 'Curry de Legumes com Coco', descricao: 'Legumes, leite de coco, especiarias', preco: p(27.9), foto: makeFoto('Curry de Legumes com Coco'), saudavel: true, categoriaDescricao: 'Vegetariano/Vegano' },
  { nome: 'Hambúrguer de Lentilha', descricao: 'Lentilha, aveia, especiarias', preco: p(24.9), foto: makeFoto('Hambúrguer de Lentilha'), saudavel: true, categoriaDescricao: 'Vegetariano/Vegano' },
  { nome: 'Nhoque de Mandioquinha', descricao: 'Mandioquinha, molho de tomate', preco: p(25.9), foto: makeFoto('Nhoque de Mandioquinha'), saudavel: true, categoriaDescricao: 'Vegetariano/Vegano' },
  { nome: 'Tofu Xadrez com Legumes', descricao: 'Tofu, pimentão, brócolis, molho leve', preco: p(26.9), foto: makeFoto('Tofu Xadrez com Legumes'), saudavel: true, categoriaDescricao: 'Vegetariano/Vegano' },
  { nome: 'Feijoada Vegana Leve', descricao: 'Feijões, legumes, temperos suaves', preco: p(29.9), foto: makeFoto('Feijoada Vegana Leve'), saudavel: true, categoriaDescricao: 'Vegetariano/Vegano' },
]

const produtosSeedMixed: ProdutoSeed[] = produtosSeed.map((p, i) => ({
  ...p,
  saudavel: i % 3 !== 0,
}))

async function ensureFkColumn() {
  const hasCategoriaId = await ds.query(`SHOW COLUMNS FROM tb_produtos LIKE 'categoriaId'`)
  const hasCategoria_id = await ds.query(`SHOW COLUMNS FROM tb_produtos LIKE 'categoria_id'`)
  if (hasCategoria_id.length > 0) return 'categoria_id'
  if (hasCategoriaId.length > 0) return 'categoriaId'
  await ds.query(`ALTER TABLE tb_produtos ADD COLUMN categoria_id BIGINT`)
  await ds.query(`ALTER TABLE tb_produtos ADD CONSTRAINT fk_tb_produtos_categoria FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id) ON DELETE CASCADE ON UPDATE CASCADE`)
  return 'categoria_id'
}

async function main() {
  const dry = process.env.SEED_DRY === '1'
  if (dry) {
    console.log('DRY_RUN')
    const saudaveis = produtosSeedMixed.filter((p) => p.saudavel).length
    const naoSaudaveis = produtosSeedMixed.length - saudaveis
    console.log({ categorias: categoriasSeed.length, produtos: produtosSeedMixed.length, saudaveis, naoSaudaveis })
    return
  }
  await ds.initialize()
  const tables = await ds.query(`SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_NAME IN ('tb_categoria','tb_produtos')`, [ds.options.database as string])
  const names = tables.map((t: any) => t.TABLE_NAME)
  if (!names.includes('tb_categoria')) {
    await ds.query(`CREATE TABLE tb_categoria (id BIGINT PRIMARY KEY AUTO_INCREMENT, descricao VARCHAR(255) NOT NULL) ENGINE=InnoDB`)
  }
  if (!names.includes('tb_produtos')) {
    await ds.query(`CREATE TABLE tb_produtos (id BIGINT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255) NOT NULL, descricao VARCHAR(255) NOT NULL, preco DECIMAL(10,2) NOT NULL, saudavel TINYINT, foto VARCHAR(5000) NOT NULL, categoria_id BIGINT, CONSTRAINT fk_tb_produtos_categoria FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB`)
  }
  const fkColumn = await ensureFkColumn()
  const existingCats = await ds.query(`SELECT id, descricao FROM tb_categoria`)
  const existingSet = new Set(existingCats.map((c: any) => c.descricao))
  const toInsert = categoriasSeed.filter((c) => !existingSet.has(c))
  for (const c of toInsert) {
    await ds.query(`INSERT INTO tb_categoria (descricao) VALUES (?)`, [c])
  }
  const categorias = await ds.query(`SELECT id, descricao FROM tb_categoria`)
  const idByDescricao = new Map<string, number>()
  for (const c of categorias) idByDescricao.set(c.descricao, Number(c.id))
  const inserted: string[] = []
  for (const p of produtosSeedMixed) {
    const categoriaId = idByDescricao.get(p.categoriaDescricao)
    if (!categoriaId) continue
    const sql = `INSERT INTO tb_produtos (nome, descricao, preco, saudavel, foto, ${fkColumn}) VALUES (?, ?, ?, ?, ?, ?)`
    const vals = [p.nome, p.descricao, p.preco, p.saudavel ? 1 : 0, p.foto, categoriaId]
    await ds.query(sql, vals)
    inserted.push(p.nome)
  }
  console.log(`Categorias inseridas: ${toInsert.length}`)
  console.log(`Produtos inseridos: ${inserted.length}`)
  await ds.destroy()
}

main().catch(async (e) => {
  console.error(e)
  try {
    if (ds.isInitialized) await ds.destroy()
  } catch {}
  process.exit(1)
})
