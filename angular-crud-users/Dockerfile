# Imagem de Origem
FROM node:14-alpine 

ENV PORT=4200
ENV WORKDIR="/app"

# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR $WORKDIR

# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH $WORKDIR/node_modules/.bin:$PATH

# Instalando dependências da aplicação e armazenando em cache.
COPY package*.json $WORKDIR/
RUN npm install --silent
RUN npm install -g @angular/cli@latest
#RUN npm install -g @angular/cli@7.3.9 --silent

#COPY . .
EXPOSE $PORT

# Inicializa a aplicação
CMD ["ng", "serve", "--host", "0.0.0.0"]
#CMD ["npm", "start"]