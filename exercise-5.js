function power(base, exponent) {
    try {
      if (typeof base !== "number" || typeof exponent !== "number") {
        throw new Error("Error: You must insert two numbers");
      }
      const result = Math.pow(base, exponent);
      return result;
    } catch (error) {
      console.error(error.message);
      return null;
    } finally {
      console.log("Operation complete.");
    }
  }

  const result = power(8, 3);
  console.log(result);