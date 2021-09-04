/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {
  string s;
  int i,j,n;
  cout<<"Enter string: ";
  cin>>s;
  n=s.size();
  ll dp[n];
  dp[n-1]=0;
  for(i=n-2;i>=0;i--){
    ll ans=0;
    ll c1=0;
    ll c2=0;
    dp[i]=0;
    for(j=i;j<n;j++){
      if(s[j]=='a')c1++;
      else
      c2++;
      if(c1==c2){
        if(j==n-1)
dp[i]=max(dp[i],(ll)1);
else
dp[i]=max(dp[i],1+dp[j+1]);
}
}
}
ll ans=0;
for(i=0;i<n;i++)
ans=max(ans,dp[i]);
cout<<"Max no of balanced substring in a partition is: "<<ans;


};