import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, log the submission (replace with Resend when API key is available)
    console.log('Contact form submission:', { name, email, phone, message });

    // TODO: Implement Resend email sending
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'FitWorld Gym <noreply@fitworldgym.ro>',
    //   to: 'contact@fitworldgym.ro',
    //   subject: `Mesaj nou de la ${name}`,
    //   html: `
    //     <h2>Mesaj nou de pe website</h2>
    //     <p><strong>Nume:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Telefon:</strong> ${phone || 'N/A'}</p>
    //     <p><strong>Mesaj:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

