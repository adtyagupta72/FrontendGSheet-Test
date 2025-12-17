exports.handler = async () => {
  try {
    const res = await fetch(
      "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
    );

    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};