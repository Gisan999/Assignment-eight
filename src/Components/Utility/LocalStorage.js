const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donation-category');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}
const donation = id => {
    const storedDonation = getStoredDonation();
    const exists = storedDonation?.find(categoryId => categoryId === id);
    if (!exists) {
        storedDonation.push(id);
        localStorage.setItem('donation-category', JSON.stringify(storedDonation))
    }
}

export { getStoredDonation, donation };