export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const EMAIL_TO = process.env.EMAIL_TO;

  try {
    const response = await fetch(EMAIL_TO, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      return res.status(200).json({ status: 'success' });
    } else {
      return res.status(500).json({ status: 'error' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
