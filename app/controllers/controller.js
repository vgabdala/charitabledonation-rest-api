import express from 'express'
import mongoose from 'mongoose'
import CharitableDonation from '../models/charitabledonation'

export function createDonation(req, res){
  if(validateRequest(req, res)){
    var newCharitableDonation = new CharitableDonation({
        purpose: req.body.purpose,
        amount: req.body.amount,
        pay_method: req.body.pay_method,
        note: req.body.note,
        charitableEntityId: req.body.charitableEntityId,
        createdByUserId: req.body.createdByUserId
      });

      newCharitableDonation.save((err) => {
        if(err) throw err
        res.json({ success: true, message: 'Charitable Donation created successfully.' });
      });
  }
}

export function viewDonation(req, res){
  if(mongoose.Types.ObjectId.isValid(req.params.donationId)){
    CharitableDonation.find({_id: req.params.donationId}, (err,donations) => {
      if(err) throw err;
      res.json(donations)
    });
  } else {
    return res.json({ success: false, message: 'Viewing failed. The id provided is an invalid ObjectId.' });
  }
}

export function updateDonation(req, res){
  if(mongoose.Types.ObjectId.isValid(req.params.donationId)){
    CharitableDonation.update({_id: req.params.donationId}, req.body, (err, result) => {
      if(err) throw err
      res.json(result)
    });
  } else {
    return res.json({ success: false, message: 'Updating failed. The id provided is an invalid ObjectId.' });
  }
}

export function deleteDonation(req, res){
  if(mongoose.Types.ObjectId.isValid(req.params.donationId)){
    CharitableDonation.remove({_id: req.params.donationId}, (err, result) => {
      if(err) throw err
      res.json(result)
    });
  } else {
    return res.json({ success: false, message: 'Deleting failed. The id provided is an invalid ObjectId.' });
  }
}

export function listDonations(req, res){
  CharitableDonation.find((err, donations) => {
    if(err) throw err
    res.json(donations)
  });
}

function validateRequest(req, res){

  if(req.body.purpose == null || req.body.purpose == ''){
    res.json({ success: false, message: 'Fail. purpose must be provided.' });
    return false;
  } 

  if(req.body.amount == null || req.body.amount == ''){
    res.json({ success: false, message: 'Fail. amount must be provided.' });
    return false;
  }

  if(req.body.pay_method == null || req.body.pay_method == ''){
    res.json({ success: false, message: 'Fail. pay_method must be provided.' });
    return false;
  }

  if(req.body.charitableEntityId == null || req.body.charitableEntityId == ''){
    res.json({ success: false, message: 'Fail. charitableEntityId must be provided.' });
    return false;
  }

  if(req.body.createdByUserId == null || req.body.createdByUserId == ''){
    res.json({ success: false, message: 'Fail. createdByUserId must be provided.' });
    return false;
  }

  return true;
}