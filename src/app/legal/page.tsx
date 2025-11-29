import React from "react";
export const metadata = {
  robots: "noindex, nofollow",
};

export default function LegalPage() {
    return (
        <div className="page_ pageLegal">
            <h1>Legal Notice</h1>

            <section>
                <h2>Site Owner</h2>
                <p>
                    This website is owned and operated by a self-employed individual
                    (freelancer).
                </p>
                <p>
                    <strong>Name:</strong> Natalia Barinova
                    <br />
                    <strong>Status:</strong> Self-employed (Trabalhadora Independente)
                    <br />
                    <strong>Country:</strong> Portugal
                    <br />
                </p>

            </section>
            <section></section>
            <section>
                <section>
                    <h2>Educational Disclaimer</h2>

                    <p>
                        This website is not an official educational institution and does not provide
                        accredited courses, certified training, or a formal learning curriculum.
                        LinguaFly is a personal project based on the creator’s own experience, 
                        designed to help users learn languages through examples, a vocabulary training tool, and AI-assisted explanations.
                    </p>
                    <p>
                        The content on this website is offered as a supportive learning tool only
                        and should not be considered professional education, language instruction,
                        or a substitute for certified teaching services.
                    </p>
                </section>

            </section>
            <section></section>
            <section>
                <h2>Contact</h2>
                <p>

                    For any questions about this website, content, or services or inquiries about professional web application development, you can
                    contact:
                </p>
                <p>
                    <strong>Email:</strong> ip.portu.me@gmail.com
                </p>
            </section>
        </div>
    );
}
