export default function ProductDetailPage() {
    return (
        <main className="pt-[75px]">
            <div className="container mx-auto mb-10">
                <div className="flex divide-x divide-gray-300">
                    <div className="w-[41%] pr-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="col-span-2 w-full aspect-square rounded-[32px] overflow-hidden bg-gray-300"></div>
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-300"></div>
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-300"></div>
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-300"></div>
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-gray-300"></div>
                        </div>
                    </div>
                    <div className="flex-1 h-[400px] pl-6">
                        <div className="flex flex-col gap-6">
                            {/* Header Title */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <h2>Funki Mushroom Coffee</h2>
                                    <span>Love</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span>Rp 60,000</span>
                                    <span>Rp 60,000</span>
                                    <span>OFF 20%</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <h3>Nectarine, Blackberry, Honeysnuckle</h3>
                                <p>
                                    Discover the essence of our coffee bean journey! Each of our charming cafes in Northwest Arkansas offers a unique experience, showcasing the rich flavors and aromas of our carefully sourced coffee beans. Check out our cafe hours, dive into our diverse menu, and plan your visit any day of the week!
                                </p>
                            </div>

                            <hr className="border-t border-gray-200" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}