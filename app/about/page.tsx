import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-6">About Temporal Video Grounding</h1>

          <div className="space-y-8">
            {/* Motivation Section */}
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border">
              <h2 className="text-foreground text-xl font-semibold mb-4">Motivation</h2>

              <p className="text-muted-foreground mb-4">
                Investigators often face the daunting challenge of sifting through extensive hours of CCTV footage, a
                process so time-consuming that it is frequently overlooked. In many instances, the effort required to
                manually review footage outweighs potential benefits, leading to critical evidence being missed. When
                video review is necessary, investigators typically narrow their focus to specific time frames, increasing
                the risk of overlooking important information scattered across various periods.
              </p>

              <p className="text-muted-foreground">
                The motivation behind developing a video temporal grounding system is to address these challenges
                effectively. Temporal video grounding aims to localize short segments from unsegmented and untrimmed
                videos based on natural language query sentences. In this work, we aim to thoroughly examine various
                approaches to video temporal grounding, analyzing the strengths and weaknesses of each method. We also
                investigate the potential of Retrieval-Augmented Generation (RAG) to enhance the performance of the
                grounding task.
              </p>
            </div>

            {/* How It Works Section */}
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border">
              <h2 className="text-foreground text-xl font-semibold mb-4">How It Works</h2>

              <p className="text-muted-foreground mb-4">
                Our system uses a sophisticated cross-attention model that processes both natural language descriptions
                and video content to identify relevant timestamps with high precision.
              </p>

              <ol className="space-y-4 text-muted-foreground list-decimal pl-6">
                <li>
                  <strong className="text-foreground">Input Query:</strong> Users enter a natural language description of the moment they're looking
                  for.
                </li>
                <li>
                  <strong className="text-foreground">Witness Reports:</strong> The system can incorporate witness reports to refine the search query.
                </li>
                <li>
                  <strong className="text-foreground">Video Processing:</strong> Our AI analyzes the video content frame by frame.
                </li>
                <li>
                  <strong className="text-foreground">Cross-Modal Fusion:</strong> The system matches the text descriptions with video features.
                </li>
                <li>
                  <strong className="text-foreground">Timestamp Prediction:</strong> Precise start and end timestamps are identified.
                </li>
              </ol>
            </div>

            {/* Applications Section */}
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border">
              <h2 className="text-foreground text-xl font-semibold mb-4">Applications</h2>

              <p className="text-muted-foreground mb-4">Temporal Video Grounding has numerous applications across various industries:</p>

              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Security and surveillance</li>
                <li>Law enforcement and forensic analysis</li>
                <li>Media content management</li>
                <li>Sports analysis</li>
                <li>Educational content navigation</li>
              </ul>
            </div>

            {/* Technology Section */}
            <div className="bg-card/60 backdrop-blur-sm p-6 rounded-lg border border-border">
              <h2 className="text-foreground text-xl font-semibold mb-4">Our Technology</h2>

              <p className="text-muted-foreground mb-4">The system leverages state-of-the-art deep learning models including:</p>

              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>CLIP text encoder for natural language understanding</li>
                <li>SlowFast R50 video encoder for visual feature extraction</li>
                <li>Custom cross-modal attention layers for multimodal fusion</li>
                <li>Temporal Convolutional Networks (TCN) for precise localization</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

