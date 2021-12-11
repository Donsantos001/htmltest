#include<stdio.h>
#define M 10
void sum(int n, int *a);

int main(){
    int a[M],*b;
    b = a;
    for(b=a; b <a+M;b++){
        scanf("%d",b);
    }
    sum(M,a);
    for(b=a; b <a+M;b++){
        printf("%d ",*b);
    }
    return 0;
}

void sum(int n,int *a){
    int *c,add = 0;
    c=a;
    for(; c<a+n ;c++){
        add += *(c+a);
    }
    printf("%d",add);
}