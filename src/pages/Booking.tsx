// TODO: Ensure you have installed 'lucide-react', 'date-fns', and your custom UI components (e.g., shadcn/ui). If not, run:
// npm install lucide-react date-fns
// And generate/copy the required components into '@/components/ui/'

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Phone, QrCode, Star } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const vehicles = [
  { value: "suv", label: "SUV" },
  { value: "tempo-traveller", label: "Tempo Traveller" },
  { value: "traveller", label: "Traveller" },
  { value: "winger", label: "Winger" },
  { value: "innova", label: "Innova" },
  { value: "innova-crysta", label: "Innova Crysta" },
]

interface FormData {
  fullName: string
  contactNumber: string
  email: string
  vehicle: string
  pickupDate: Date | undefined
  dropoffDate: Date | undefined
  pickupLocation: string
  dropoffLocation: string
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactNumber: "",
    email: "",
    vehicle: "",
    pickupDate: undefined,
    dropoffDate: undefined,
    pickupLocation: "",
    dropoffLocation: "",
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleDateChange = (field: "pickupDate" | "dropoffDate", date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      [field]: date,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (
      !formData.fullName ||
      !formData.contactNumber ||
      !formData.email ||
      !formData.vehicle ||
      !formData.pickupDate ||
      !formData.dropoffDate ||
      !formData.pickupLocation ||
      !formData.dropoffLocation
    ) {
      alert("Please fill in all required fields")
      return
    }

    try {
      // You can integrate with EmailJS here if needed
      // const serviceID = 'service_1prau5o';
      // const templateID = 'template_c6yrumg';
      // const userID = 'DOaxrxbmlGcH7_wKm';

      console.log("Booking data:", formData)
      alert("Booking submitted successfully! We will contact you shortly.")

      // Reset form
      setFormData({
        fullName: "",
        contactNumber: "",
        email: "",
        vehicle: "",
        pickupDate: undefined,
        dropoffDate: undefined,
        pickupLocation: "",
        dropoffLocation: "",
      })
    } catch (error) {
      console.error("Booking submission failed:", error)
      alert("Failed to submit booking. Please try again later or contact us directly.")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Car Rental Booking Form</h1>
          <p className="text-lg text-gray-600">Book your perfect vehicle for your journey</p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Booking Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("contactNumber", e.target.value)}
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Vehicle Selection */}
              <div className="space-y-2">
                <Label htmlFor="vehicle">Select Vehicle *</Label>
                <Select value={formData.vehicle} onValueChange={(value: string) => handleInputChange("vehicle", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicles.map((vehicle) => (
                      <SelectItem key={vehicle.value} value={vehicle.value}>
                        {vehicle.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Pick-up Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.pickupDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.pickupDate ? format(formData.pickupDate, "PPP") : "Select pick-up date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.pickupDate}
                        onSelect={(date: Date | undefined) => handleDateChange("pickupDate", date)}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Drop-off Date *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.dropoffDate && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.dropoffDate ? format(formData.dropoffDate, "PPP") : "Select drop-off date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.dropoffDate}
                        onSelect={(date: Date | undefined) => handleDateChange("dropoffDate", date)}
                        disabled={(date) => date < new Date() || (formData.pickupDate && date <= formData.pickupDate)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Location Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="pickupLocation">Pick-up Location *</Label>
                  <Input
                    id="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("pickupLocation", e.target.value)}
                    placeholder="Enter pick-up location"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dropoffLocation">Drop-off Location *</Label>
                  <Input
                    id="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("dropoffLocation", e.target.value)}
                    placeholder="Enter drop-off location"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button type="submit" size="lg" className="px-12 py-3 text-lg font-semibold">
                  Book Now
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Payment and Services Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment, Reservation & Feedback</h2>
            <Separator className="max-w-md mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment QR */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="/asset/qrcode.webp"
                    alt="Payment QR Code"
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
                <Button className="w-full" size="lg">
                  <QrCode className="mr-2 h-5 w-5" />
                  Scan & Pay
                </Button>
              </CardContent>
            </Card>

            {/* Reservation */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="/asset/booking.webp"
                    alt="Booking Information"
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
                <Button variant="secondary" className="w-full" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Reservation
                </Button>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="/asset/google-review-qr.webp"
                    alt="Google Review QR Code"
                    className="mx-auto rounded-lg shadow-md"
                  />
                </div>
                <p className="font-semibold mb-3">How did we do?</p>
                <Button variant="outline" className="w-full bg-transparent" size="lg" asChild>
                  <a
                    href="https://www.google.com/search?q=ashoka+destination+review"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Star className="mr-2 h-5 w-5" />
                    Leave Google Review
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feedback/Review Section with external rating image */}
        <div className="flex flex-col items-center my-8">
          <Card className="w-full max-w-xs mx-auto shadow-lg">
            <img
              src="https://xappsoftt.online/ashoka/rating.webp"
              alt="Feedback Rating"
              className="w-full h-auto object-contain rounded-t-lg"
            />
            <div className="py-4">
              <p className="text-center font-medium">We value your feedback!</p>
            </div>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">Contact us directly for immediate assistance or special requests</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button variant="outline" size="lg">
                  WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Booking
