# social-mern

TEST API's

| METHOD 	  | ROUTE             	| EXPECT          	  | ACCESSIBILITY 	| DESCRIPTION 	|
|--------	  |-------------------	|-----------------	  |---------------	|-------------	|
| GET    	  | `**/api/user/test**`    	| "API connected" 	  | PUBLIC        	| Test route  	|
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
| GET    	  | api/profile/handle/:handle 	| profile         	| PUBLIC        	| handle  *e.g.* `/handle/saurabh` |
| GET    	  | api/profile/user/:user_id	  | profile         	| PUBLIC        	| user profile  *e.g.* `/user/5j3jwhb7rsgf87u` |
| GET    	  | api/profile                 | profile         	| PRIVATE       	| user profile  |



