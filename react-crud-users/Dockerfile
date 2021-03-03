# Imagem de Origem
FROM node:13-alpine

ENV PORT=3000
ENV WORKDIR="/app"

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR $WORKDIR

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH $WORKDIR/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package*.json $WORKDIR/

RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

# Bundle app source
#COPY . .
#COPY . $WORKDIR
EXPOSE $PORT

# Inicializa a aplicação
CMD ["npm", "start"]


