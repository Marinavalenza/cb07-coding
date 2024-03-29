const BASE_URL = "https://dummyjson.com/carts/";
export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};
const POST = async () => {
  const res = await fetch(BASE_URL + "add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: 1,
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 50,
          quantity: 2,
        },
      ],
    }),
  });
  const data = await res.json();
  return data;
};
POST();
