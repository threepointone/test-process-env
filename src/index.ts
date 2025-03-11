console.log(process.env.SOME_KEY);
export default {
  fetch(request: Request) {
    return new Response("Hello, World!");
  },
};
