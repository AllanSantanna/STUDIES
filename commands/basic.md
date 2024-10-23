Guia de Comandos Básicos de Terminal
Este guia fornece uma visão geral dos comandos de terminal mais básicos e essenciais para navegar e manipular arquivos e diretórios em sistemas Windows, Linux e Mac.

1. Navegar entre Diretórios com cd
   O comando cd (Change Directory) permite mudar entre os diretórios no sistema de arquivos.

Exemplos:
Windows/Linux/Mac:

cd /caminho/do/diretório
cd ..
O primeiro exemplo navega até o diretório especificado. O segundo (cd ..) retorna para o diretório pai (um nível acima).

2. Listar Conteúdo de um Diretório com dir ou ls
   Esses comandos listam os arquivos e pastas dentro de um diretório.

Windows: Utilize dir

dir
Linux/Mac: Utilize ls

ls
ls -la
O comando ls -la mostra detalhes adicionais, como permissões, dono, e tamanho dos arquivos.

3. Criar e Excluir Diretórios com mkdir e rmdir
   Criar Diretórios:
   Windows/Linux/Mac:

mkdir nome_do_diretório
Esse comando cria um novo diretório com o nome especificado.

Excluir Diretórios:
Windows:

rmdir nome_do_diretório
Linux/Mac:

rmdir nome_do_diretório
Ambos os sistemas usam rmdir para remover diretórios vazios. Para remover diretórios não vazios, use rm -r no Linux/Mac:

rm -r nome_do_diretório 4. Exibir Texto ou Conteúdo de Arquivos com echo, cat, ou type
Exibir Texto:
Windows/Linux/Mac:

echo "Texto a ser exibido"
Exibir Conteúdo de Arquivos:
Windows: Use o comando type

type nome_do_arquivo.txt
Linux/Mac: Use o comando cat

cat nome_do_arquivo.txt 5. Excluir Arquivos com del ou rm
Windows: Utilize del para deletar arquivos.

del nome_do_arquivo.txt
Linux/Mac: Utilize rm para remover arquivos.

rm nome_do_arquivo.txt
Para remover diretórios e seus conteúdos, use:

rm -r nome_do_diretório 6. Verificar Espaço Disponível no Sistema
Linux/Mac: Use df

df -h
O parâmetro -h exibe os tamanhos de forma legível (human-readable).

Windows: Use chkdsk

chkdsk
Esse comando verifica o disco e mostra informações sobre espaço disponível e erros no disco.
