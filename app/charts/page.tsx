import Image from "next/image"

export default function TablesPage() {

  const chartImages = [
    "assembly-arithmetic-instructions_chart.png",
    "assembly-operands_chart.png",
    "branches_chart.png",
    "comparators_chart.png",
    "condition-codes-and-flags_chart.png",
    "hex-decimal-binary_chart.png",
    "register-names_chart.png",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Important Tables</h1>
        <p className="mt-2 text-muted-foreground">Based on "Computer Systems: A Programmer's Perspective" (3rd ed.)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chartImages.map((image, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <Image
              src={`/${image}`}
              alt={image.replace(/_/g, " ").replace(".png", "")}
              width={500}
              height={500}
              className="object-cover"
            />
            <div className="p-4">
              <p className="text-center text-sm font-medium">
                {image.replace(/_/g, " ").replace(".png", "").replace(".jpg", "")}
              </p>
            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}