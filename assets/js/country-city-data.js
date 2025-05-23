// Country and city data
const countryCityData = {
    'Nigeria': ['Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan'],
    'Ghana': ['Accra', 'Kumasi', 'Tamale', 'Sekondi-Takoradi', 'Cape Coast'],
    'South Africa': ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
    'Kenya': ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'],
    'Egypt': ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said']
};

// Function to initialize country-city functionality
function initializeCountryCity() {
    const countrySelect = $('#country');
    const citySelect = $('#city');
    
    // Initially disable city dropdown
    citySelect.prop('disabled', true);
    
    // Populate countries
    Object.keys(countryCityData).forEach(country => {
        countrySelect.append($('<option></option>').val(country).text(country));
    });
    
    // Handle country change
    countrySelect.on('change', function() {
        const selectedCountry = $(this).val();
        citySelect.empty().append('<option value="">Select City</option>');
        
        if (selectedCountry && countryCityData[selectedCountry]) {
            citySelect.prop('disabled', false);
            countryCityData[selectedCountry].forEach(city => {
                citySelect.append($('<option></option>').val(city).text(city));
            });
        } else {
            citySelect.prop('disabled', true);
        }
        
        citySelect.trigger('change');
    });
}

// Initialize when document is ready
$(document).ready(function() {
    initializeCountryCity();
}); 