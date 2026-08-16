import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/form/field/checkbox';
import { Label } from '@/components/ui/form/label';
import { FilterItemCollapsible } from './filter-item-collapsible';

export function FilterForm() {
    return (
        <div className="h-full flex flex-col gap-6">
            <div className="flex items-center justify-between px-4 pt-4 lg:px-0 lg:pt-0">
                <h2 className="font-heading font-bold text-4xl">Filters</h2>
                <div className="text-primary">42 Results</div>
            </div>
            <div className="flex-1 px-4 max-h-[76.97044335vh] overflow-y-auto space-y-6 lg:flex-none lg:px-0 lg:max-h-none lg:overflow-visible">
                <FilterItemCollapsible title="Roast Level">
                    <div className="space-y-2">
                        <div className="h-[48px] border border-gray-300 rounded-full"></div>
                        <div className="flex items-center justify-between text-sm text-gray-800">
                            <div>Darker</div>
                            <div>Lighter</div>
                        </div>
                    </div>
                </FilterItemCollapsible>
                <FilterItemCollapsible title="Origin">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Checkbox id="origin-burundi" />
                            <Label
                                htmlFor="origin-burundi"
                                className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                                Burundi
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="origin-colombia" />
                            <Label
                                htmlFor="origin-colombia"
                                className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                                Colomiba
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="origin-ecuador" />
                            <Label
                                htmlFor="origin-ecuador"
                                className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                                Ecuador
                            </Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="origin-mexico" />
                            <Label
                                htmlFor="origin-mexico"
                                className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                                Mexico
                            </Label>
                        </div>
                    </div>
                </FilterItemCollapsible>
                <FilterItemCollapsible title="Profile">
                    <div className="space-y-2">
                        <div className="h-[48px] border border-gray-300 rounded-full"></div>
                        <div className="flex items-center justify-between text-sm text-gray-800">
                            <div>Traditional</div>
                            <div>Modern</div>
                        </div>
                    </div>
                </FilterItemCollapsible>
                <FilterItemCollapsible title="Process">
                    <div className="space-y-2"></div>
                </FilterItemCollapsible>
                <FilterItemCollapsible title="Variety">
                    <div className="space-y-2"></div>
                </FilterItemCollapsible>
            </div>
            <div className="p-4 bg-gray-50 shadow-[0_-4px_18px_0_rgba(0,0,0,0.1)] lg:p-0 lg:bg-transparent lg:shadow-none">
                <Button className="w-full">Apply</Button>
            </div>
        </div>
    );
}
