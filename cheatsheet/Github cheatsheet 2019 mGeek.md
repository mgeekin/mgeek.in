---
layout: page
title: Github cheet sheet 2019 form mGeek.in
submenu: true
submenutype: cheatsheet
submenuindex: 1
comments: true

---

## Create a new repository
```
git init
echo "# MESSAGE" >> README.md
git add README.md
git commit -m "first commit"
```

### To a add a new remote
```
git remote add origin git@github.com:User/UserRepo.git
```
### To change the url of an existing remote repository
```
git remote set-url origin git@github.com:User/UserRepo.git
git push -u origin master
```  

push your code to the `master` branch of the remote repository defined with `origin` and `-u` let you point your current local branch to the remote `master` branch


### Common git command

`
git add .
`
add all the changes/modifications to staging area  
`git commit -m"your comment"` will commit the changes with your comment  
`git push master origin`  
or    
`git push` is used to push local commits (changes) to master branch of origin 

`git pull` is used to sync down changes to local git repo

`git clone URL` is used to clone/download git repo to local  







---
## Proxy config
```
git config --global http.proxy http://username:password@ipaddress:port
```

---
## Large files 
Download and install the Git command line extension. You only have to set up Git LFS once.
`git lfs install
`

Select the file types you'd like Git LFS to manage (or directly edit your .gitattributes). You can configure additional file extensions at anytime.
```
git lfs track "*.psd"
git lfs track "*.mat"
```

Make sure .gitattributes is tracked
```
git add .gitattributes
git large files
```
---
## Recover files

### Recover file form local .git
```
git reset HEAD \*
git checkout -- .
```
### Reset local git  

```
git reset
git checkout .
git clean -fdx
```
---
## Github.com
### setup local account

Open Git Bash.
Paste the text below, substituting in your GitHub email address.

```
ssh-keygen -t rsa -b 4096 -C "your_github_email@gmail.com"
```

This creates a new ssh key, using the provided email as a label.
Generating public/private rsa key pair.  
When you're prompted to "Enter a file in which to save the key," `[press Enter]`. This accepts the default file location.  
Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):`[Press enter]`

#### Local password
At the prompt, type a secure passphrase. For more information, see "Working with SSH key passphrases".  
Enter passphrase (empty for no passphrase): [Type a passphrase]  
Enter same passphrase again: [Type passphrase again]


```
eval $(ssh-agent -s)
clip < ~/.ssh/id_rsa.pub
```

Now the generated ssh key is on the clipboard paste it on the https://github.com/settings/keys





---
## Hosting
### github pages domain and subdomain redirect
github ip  
```
192.30.252.153
192.30.252.154
```
### Force rebuild pages

```
git commit -m 'rebuild pages' --allow-empty
git push origin master

```

[&copy; mGeek.in](http://mGeek.in)