import express from 'express'
import mongoose from 'mongoose'
import {
	createDonation, 
	viewDonation, 
	updateDonation, 
	deleteDonation, 
	listDonations
} from '../controllers/controller'

const routes   = express.Router() 

// List Donations
routes.get('/donation', listDonations)

//Create Donation
routes.post('/donation', createDonation)

//View Donation
routes.get('/donation/:donationId', viewDonation)

//Edit Donation
routes.patch('/donation/:donationId', updateDonation)

//Delete Donation
routes.delete('/donation/:donationId', deleteDonation)

export default routes;