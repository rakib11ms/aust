<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\UserProfessionalInfo;
use App\Models\UserEducationalInfo;
use App\Models\LoginEmailOtp;
use Illuminate\Support\Facades\Hash;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Mail;
use App\Mail\Welcome;
use App\Mail\ForgotPassword;
use Illuminate\Support\Facades\Auth;

class MobileAuthenticationController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [

                // 'full_name' => 'required|max:191',
                // 'name' => 'required|max:191',
                'email' => 'required|email|max:191|unique:users,email',
                'phone_no' => 'required|unique:users',
                'confirm_password' => 'required|same:password|min:6',
            ]

        );

        if ($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages(),
                'status' => 400
            ]);
        } else {
            $duplicateUser = User::where(['email' => $request->email])->first();

            if ($duplicateUser < 1) {
                $user = new User();

             if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/',$filename);
            $user->image =$filename ;
         } 
                $user->full_name = $request->full_name;
                $user->nick_name = $request->nick_name;
                $user->email = $request->email;
                $user->user_role = $request->user_role;
                $user->batch = $request->batch;
                $user->phone_no = $request->phone_no;
                $user->bio = $request->bio;
                $user->blood_group = $request->blood_group;
                $user->gender = $request->gender;
                $user->stream = $request->stream;
                $user->job_sector = $request->job_sector;
                $user->job_sub_sector = $request->job_sub_sector;
                $user->office_email = $request->office_email;
                $user->thana = $request->thana;
                $user->status = "pending";

                // if($request->office_email !==null && ){

                // }
    


                $user->present_address = $request->present_address;
                $user->permanent_address = $request->permanent_address;
                // $user->otp_verify = 0;
                $user->password = Hash::make($request->password);
                $user->confirm_password = Hash::make($request->confirm_password);
                $user->assignRole($request->user_role);

                $user->save();




                $user_professional=new UserProfessionalInfo();
                $user_professional->office_address = $request->office_address;
                $user_professional->name_of_company = $request->name_of_company;
                $user_professional->year = $request->year;
                $user_professional->designation= $request->designation;
                $user_professional->user_id= $user->id;
                $user_professional->save();

                $user_educational=new UserEducationalInfo();
                $user_educational->user_id= $user->id;
                $user_educational->save();

                $token = $user->createToken($user->email . '_Token')->plainTextToken;

            $otp = mt_rand(00000, 99999);

                $emailOtp = new LoginEmailOtp();
                $emailOtp->user_id = $user->id;
                $emailOtp->otp = $otp;
                $emailOtp->save();


                Mail::to($user->email)->send(new Welcome($otp));



                return response()->json([
                    'status' => 200,
                    'token' => $token,
                    'user' => $user,
                    'emailotp' => $emailOtp,
                    'message' => 'Registration Successfull'
                ]);
            } else {
                return response()->json([
                    'status' => 400,

                    'message' => 'We Have already send email in your gmail'
                ]);
            }
        }
    }

    public function userProfessionalAddMore(Request $request){
            
            $save_more_professional=new UserProfessionalInfo();
            $save_more_professional->user_id=$request->user_id;
            $save_more_professional->name_of_company= $request->name_of_company;
            $save_more_professional->office_address= $request->office_address;
            $save_more_professional->year= $request->year;
            $save_more_professional->designation=$request->designation;
            $save_more_professional->save();
            $user_professional_infos=UserProfessionalInfo::where('user_id',$request->user_id)->get();
            return response()->json([
                    'status' => 200,
                    'message' => 'User Professional added one more',
                    'user_professional_infos'=>$user_professional_infos,
                ]);


    }



        public function userProfessionalUpdate(Request $request,$id){

            $update_user_profession=UserProfessionalInfo::find($id);
        $update_user_profession->user_id=$request->user_id;
            $update_user_profession->office_address=$request->office_address;
            $update_user_profession->year=$request->year;
            $update_user_profession->designation=$request->designation;
            $update_user_profession->name_of_company=$request->name_of_company;
       
            $update_user_profession->update();
            $update_user_profession_data=UserProfessionalInfo::where('id',$id)->first();

              return response()->json([
                    'status' => 200,
                    'update_user_profession_data' =>$update_user_profession_data
                ]);

    }

    public function editUserEducationalInfo(Request $request,$id){
            $update_educational=UserEducationalInfo::where('user_id',$id)->first();
            // $update_educational->user_id=auth('sanctum')->user()->id;
            $update_educational->user_id=$update_educational->user_id;
            $update_educational->ssc_passing_year=$request->ssc_passing_year;
            $update_educational->hsc_passing_year=$request->hsc_passing_year;
            $update_educational->bsc_passing_year=$request->bsc_passing_year;
            $update_educational->msc_passing_year=$request->msc_passing_year;
            $update_educational->ssc_grade=$request->ssc_grade;
            $update_educational->hsc_grade=$request->hsc_grade;
            $update_educational->bsc_grade=$request->bsc_grade;
            $update_educational->msc_grade=$request->msc_grade;
            $update_educational->ssc_institution=$request->ssc_institution;
            $update_educational->bsc_institution=$request->bsc_institution;
            $update_educational->hsc_institution=$request->hsc_institution;
            $update_educational->msc_institution=$request->msc_institution;
            $update_educational->update();

            return response()->json([
                    'status' => 200,
                    'update_educational_data' =>$update_educational
                ]);
    }


public function userCvUpload(Request $request,$id){
            $user_cv_upload=User::find($id);
               if($request->hasFile('cv_file')){
            $file=$request->file('cv_file');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;

            $file->move('cv/',$filename);
            $user_cv_upload->cv_file =$filename;
         } 
$user_cv_upload->update();
       return response()->json([
                  'status'=>200,
                    'message' => 'Cv Upload Successfull'
                ]);

}






     public function updateUserBio(Request $request,$id){
 $update_bio=User::where('id',$id)->first();
            $update_bio->bio=$request->bio;
  
            $update_bio->update();
            $updated_bio=User::where('id',$id)->first();

            return response()->json([
                    'status' => 200,
                    'updated_bio' =>$updated_bio
                ]);
    }
       public function updateUserContactSocialInformation(Request $request,$id){
   $update_contact_social=User::where('id',$id)->first();
            $update_contact_social->office_email=$request->office_email;
            $update_contact_social->facebook_link=$request->facebook_link;
            $update_contact_social->linkedin_link=$request->linkedin_link;
            $update_contact_social->twitter_link=$request->twitter_link;
            $update_contact_social->phone_no=$request->phone_no;
  
            $update_contact_social->update();
            $updated_contact_social=User::where('id',$id)->first();

            return response()->json([
                    'status' => 200,
                    'updated_contact_social' =>$updated_contact_social
                ]);
    }


    public function loginValideOtp(Request $request)
    {


        $otp = LoginEmailOtp::where(['user_id' => $request->user_id, 'otp' => $request->otp])->first();


        if ($otp != null) {
            if ($otp) {
                $user = User::find($otp->user_id);
                $login_token = $user->createToken($user->email)->plainTextToken;
            }



            return response()->json([
                'status' => 200,
                'emailotp' => $otp,
                'token' => $login_token,
                'message2' => 'Login Successfull',
                'message' => 'Email Verify Successful'
            ]);
        } else {
            return response()->json([
                'status' => 401,

                // 'login Status'=>false,
                'emailotp' => $otp,
                'message' => 'Error ! Otp does not match',
            ]);
        }
    }

    public function userLogin(Request $request)
    {

        $user = User::where('email', $request->email)->first();
        // dd($user->device_token);

        if($user){
 $user->device_token=$request->device_token;
        $user->save();
        }
       

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(
                [
                    'message' => 'Login invalid',
                    'status' => 401,
                ]
            );
        }

        $login_token = $user->createToken($request->email)->plainTextToken;

        return response()->json(
            [
                'message' => 'Login Successfull',
                'status' => 200,
                'mess_status' => true,
                'token' => $login_token,
                'user_id'=>$user->id
            ]
        );
    }


    // public function check(){
    //     dd(auth('sanctum')->user()->id);

    // }


    public function userForgotPassword(Request $request)
    {
        // dd($request->all());
        $user = User::where('email', $request->email)->first();

        if ($user) {
            // dd($user->email);
            $otp = mt_rand(00000, 99999);

            $emailOtp = new LoginEmailOtp();
            $emailOtp->user_id = $user->id;
            $emailOtp->otp = $otp;
            $emailOtp->save();


            Mail::to($user->email)->send(new ForgotPassword($otp));


            return response()->json([
                'status' => 200,
                'emailotp' => $emailOtp,
                'message' => 'Otp has sent to ' . $user->email,
            ]);
        } else {

            return response()->json([
                'status' => 400,
                'message' => 'Email not found'
            ]);
        }
    }


    public function forgotPasswordOtpVerification(Request $request)
    {
        $otp = LoginEmailOtp::where(['user_id' => $request->user_id, 'otp' => $request->otp])->first();


        if ($otp != null) {
            return response()->json([
                'status' => 200,
                // 'login Status'=>true,
                'emailotp' => $otp,
                'message' => 'Forgot password verification Successful'
            ]);
        } else {
            return response()->json([
                'status' => 401,

                // 'login Status'=>false,
                'emailotp' => $otp,
                'message' => 'Forgot password verification Error',
            ]);
        }
    }


    public function changeUserforgotPassword(Request $request)
    {

        $user_id = $request->user_id;
        $user = User::find($user_id);

        if ($user) {

            $validator = Validator::make(
                $request->all(),
                [

                    'new_password' => 'required|min:6',
                    're_type_password' => 'required|same:new_password|min:6',
                ]

            );

            if ($validator->fails()) {
                return response()->json([
                    'validation_errors' => $validator->messages(),
                    'status' => 400
                ]);
            } else {


                $user->password = Hash::make($request->new_password);
                $user->confirm_password = Hash::make($request->re_type_password);
                $user->update();

                return response()->json([
                    'status' => 200,
                    'message' => 'Password set successful',
                ]);
            }
        } else {
            return response()->json([
                'status' => 400,
                'message' => 'User not found..error',
            ]);
        }
    }

        public function  UserLogout(){
              auth()->user()->tokens()->delete();
           return response()->json([
                'status'=>200,
                'message'=>'User Logged Out Successfull'
            ]);
}


//user profile mobile 


    public function specificUser($id)
    {

        // dd($formatChange);

         $user_info=User::where('id',$id)->select('id','full_name','bio','nick_name','email','phone_no','twitter_link','linkedin_link','facebook_link','image','office_email','job_sector','batch','cv_file')->with(['professionalInfo','educationalInfo','roles'])->get();

   // $user_info=User::where('id',$id)->select('users.full_name','users.bio','users.nick_name','users.email','users.phone_no','users.twitter_link','users.linkedin_link','users.facebook_link','users.image')
   //  ->with(['professionalInfo' => function ($query) {
   //      $query->select('id');
   //  }],['educationalInfo' => function ($query) {
   //      $query->select('id');
   //  }])
   //  ->get();

        // $pay_date = $user_info->registration_pay_date;
        // $end_date = $user_info->registration_pay_end_date;
        // // dd($end_date);
        // $formatChange= date('d-m-Y',strtotime($pay_date));
        // $formatChange2= date('d-m-Y',strtotime($end_date));

        // dd($end_date);

        // dd($formatChange);
        // $futureDate=date('d-m-Y', strtotime('+1 year'));
        // dd($futureDate);

        // $futureDate=date('d-m-Y', strtotime('+1 year', strtotime($pay_date)) );


        // dd($futureDate);

        // $registration_pay_validity = Carbon::now()->diffInDays($end_date);

        // dd($registration_pay_validity);
            // $check=true;
        // if ($registration_pay_validity < 15 && $check) {
        //     $event = new AusstaEvent();

        //     $event->event_title = "Email for Subscription 15 days left";
        //     // dd($event);
        //     Mail::to("rakib10ms@gmail.com")->send(new EventMail($event));
        // }



        return response()->json([
            'status' => 200,
            // 'pay_date' => $pay_date,
            // 'registration_pay_validity' => $registration_pay_validity,
            'user_info' => $user_info
        ]);
    }

   

}
