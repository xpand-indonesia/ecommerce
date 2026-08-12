'use client';

import { useState } from 'react';
import { ShippingAddressList } from './shipping-address-list';
import { ShippingAddressForm } from './shipping-address-form';
import { Address } from '../types/shipping-address-type';

export function ShippingAddressCrud() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState<Address | undefined>(
        undefined
    );

    const onOpenForm = (address?: Address) => {
        setSelectedAddress(address);
        setIsFormOpen(true);
    };

    if (isFormOpen) {
        return (
            <ShippingAddressForm
                address={selectedAddress}
                onCancel={() => setIsFormOpen(false)}
                onSubmit={() => setIsFormOpen(false)}
            />
        );
    } else {
        return <ShippingAddressList onOpenForm={onOpenForm} />;
    }
}
