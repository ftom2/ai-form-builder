type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Create Your Form
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              In Seconds Instead of Hours.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-muted-foreground">
            Streamline Your Workflow with Intelligent Form Generation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring  sm:w-auto"
              href="#"
            >
              + Create AI Form
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-secondary focus:outline-none focus:ring  sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
