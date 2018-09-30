# social-mern

TEST API's

| METHOD 	  | ROUTE             	| EXPECT          	  | ACCESSIBILITY 	| DESCRIPTION 	|
|--------	  |-------------------	|-----------------	  |---------------	|-------------	|
| GET    	  | /api/user/test    	| "API connected" 	  | PUBLIC        	| Test route  	|
| GET    	  | /api/profile/test 	| "API connected" 	  | PUBLIC        	| Test route  	|
| GET    	  | /api/posts/test   	| "API connected" 	  | PUBLIC        	| Test route  	|


USER API's

| METHOD 	  | ROUTE             	| EXPECT          	| ACCESSIBILITY 	| DESCRIPTION 	|
|--------	  |-------------------	|-----------------	|---------------	|-------------	|
| POST    	| api/users/login    	| success & token 	| PUBLIC        	| Login route  	|
| POST    	| api/users/register 	| user            	| PUBLIC        	| Register route|



PROFILE API's

| METHOD 	  | ROUTE             	        | EXPECT          	| ACCESSIBILITY 	| DESCRIPTION 	|
|--------	  |-------------------	        |-----------------	|---------------	|-------------	|
| GET    	  | api/profile/all  	          | all profile     	| PUBLIC        	| all profile  	|
| POST    	| api/profile/handle/:handle 	| profile         	| PUBLIC        	| handle > e.g. /handle/saurabh |
| POST    	| api/users/login    	        | success & token 	| PUBLIC        	| Login route  	|
| POST    	| api/users/register 	        | "API connected" 	| PUBLIC        	| Rgister route |

