import Fastify from 'fastify';

const PORT = 3000; // porta que está rodando o servidor
const app = Fastify({ logger: true }); //login fastify -- logger true para logar

app.get('/healthcheck', (Request, reply) => {
  return { menssage: 'server is up runner' };
});

//* erro caso nao fazer o login *//

try {
  // acessa o fastify  e esperta chegar
  await app.listen({ port: PORT });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
