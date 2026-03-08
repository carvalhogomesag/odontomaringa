import * as fs from 'node:fs';
import * as path from 'node:path';
import process from 'node:process';

/**
 * Script para gerar o contexto completo do projeto em um único arquivo .txt
 */

const EXCLUDED_DIRS = ['node_modules', '.git', 'dist', '.next', 'build'];
const EXCLUDED_FILES = ['project-context.txt', 'package-lock.json', '.DS_Store', 'generate-context.ts'];
const ALLOWED_EXTENSIONS = ['.html', '.ts', '.tsx', '.css', '.json', '.js', '.md', '.env', '.example'];

function generateContext() {
  let output = `================================================================\n`;
  output += `CONTEXTO DO PROJETO: ODONTOMARINGÁ\n`;
  output += `Gerado em: ${new Date().toLocaleString('pt-BR')}\n`;
  output += `================================================================\n\n`;

  function walkDir(currentPath: string) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const fullPath = path.join(currentPath, file);
      const relativePath = path.relative(process.cwd(), fullPath);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        if (!EXCLUDED_DIRS.includes(file)) {
          walkDir(fullPath);
        }
      } else {
        const ext = path.extname(file);
        if (
          !EXCLUDED_FILES.includes(file) && 
          (ALLOWED_EXTENSIONS.includes(ext) || file.startsWith('.'))
        ) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            output += `--- ARQUIVO: ${relativePath} ---\n`;
            output += `\`\`\`${ext.replace('.', '') || 'text'}\n`;
            output += content;
            output += `\n\`\`\`\n\n`;
          } catch (err) {
            console.error(`Erro ao ler arquivo ${relativePath}:`, err);
          }
        }
      }
    }
  }

  console.log('🚀 Gerando contexto do projeto...');
  walkDir(process.cwd());

  fs.writeFileSync('project-context.txt', output);
  console.log('✅ Arquivo "project-context.txt" gerado com sucesso!');
}

generateContext();
