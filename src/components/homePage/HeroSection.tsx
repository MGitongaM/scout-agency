import { Button } from "../ui/button";


export default function HeroSection() {
  return (
    <>
        <section className="bg-slate-500 h-[90vh]">
            <div className="grid grid-cols-12 items-end  h-full px-4">
            <div className="col-start-2 col-end-11 md:col-start-7 md:col-end-12 lg:col-start-9 lg:col-end-12 pb-96 space-y-4 text-white">
                <h1 className="font-bold text-3xl">Opening Doors to Inclusive Journeys</h1>
                <p className="c">Because everyone should have access to great travel experiences</p>
                <Button size='lg' className="bg-green-600 hover:bg-green-700">
                    Get Involved
                </Button>
            </div>
            </div>
        </section>
    </>
  )
}
