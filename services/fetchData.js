export const fetchData = async () => {
  return await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("We did not find anything");
      }
      const result = res.json();
      return result;
    })
    .then((result) => {
      return result;
    });
};
