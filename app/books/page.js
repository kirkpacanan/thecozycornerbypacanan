import Image from "next/image";

export default function BooksPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Book Recommendations</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book1.png" alt="The Cozy Corner Book entitled Modern CSS with Tailwind" width={300} height={400} />
          <h3 className="mt-3 font-medium">Modern CSS with Tailwind</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book2.png" alt="The Cozy Corner Book entitled The Next.js Handbook" width={300} height={400} />
          <h3 className="mt-3 font-medium">The Next.js Handbook</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book3.jpg" alt="The Cozy Corner Book entitled Mindset" width={300} height={400} />
          <h3 className="mt-3 font-medium">Mindset</h3>
        </div>
      </div>
    </section>
  );
}