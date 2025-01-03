import Image from "next/image";

export const PrimaryIssuesSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Boost your interview confidence with AI-powered practice sessions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Never feel unprepared for an interview again. Our AI technology provides unlimited practice opportunities with realistic scenarios and immediate feedback.
          </p>
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-bold text-purple-600">7+</div>
              <div className="text-sm text-gray-600">Interview types</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">30+</div>
              <div className="text-sm text-gray-600">Industry scenarios</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">2k+</div>
              <div className="text-sm text-gray-600">Success stories</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 rounded-2xl p-4">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Interview practice dashboard"
            // width={600}
            // height={400}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};
